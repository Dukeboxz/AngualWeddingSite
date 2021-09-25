import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { WeddingInfoService } from 'src/wedding-info.service';

@Component({
  selector: 'app-evening-reception',
  templateUrl: './evening-reception.component.html',
  styleUrls: ['./evening-reception.component.css']
})
export class EveningReceptionComponent implements OnInit {

  songRequestform = this.fb.group({
    Song: ['', Validators.required], 
    Artist: ['', Validators.required],
    Album: [''], 
    Message: ['', Validators.maxLength(200)],
    RequestBy: ['' ,Validators.required]
  })
  constructor(private fb: FormBuilder, private weddingInfo: WeddingInfoService) { }

  ngOnInit(): void {
  }

  SubmitSong(){

    var value = this.songRequestform.value; 
    var responseData ={
      'Song' : value.Song, 
      'Artist': value.Artist,
      'Album': value.Album,
      'Message': value.Message, 
      'RequestedBy': value.RequestBy
    }

    var rspon = JSON.stringify(responseData);
    this.weddingInfo.SaveSongRequest(rspon).subscribe(res=>{
      alert("Your response has been recorded thank you") 
    }, error => {
      console.log("There was some error ",error);
      alert("There was an error please try again")
    }
  ); 
  
  }



}
