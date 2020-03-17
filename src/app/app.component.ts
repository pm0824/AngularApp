import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-angular';
  private base64textString: String = "";

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  setMyStyle() {
    let styles = {
      
      'background-image': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,125,249,0.36224912328212533) 0%), url("assets/img/back.jpg")',
      'background-repeat':'no-repeat',
      'background-size':'100% 100%'
    };
    return styles;
  }

}
