declare namespace Song {
  interface Artist {
    artistCode: string;
    gender: string;
    name: string;
    artistType: number;
    artistTypeName: string;
    pic: string;
    region: string;
  }
  type Rate = '64' | '128' | '320' | '3000'
  type RateFileInfo = {
    [K in Rate]: FileInfo;
  }
  interface FileInfo {
    size: number;
    format: 'aac' | 'mp3' | 'flat';
  }
}