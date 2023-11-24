export declare type FileServerResponse = {
  uploadStatus: number;
  response: any;
};
export declare type InitialUploaderFile = {
  progress: number;
  error: string;
  file: File;
  lastServerResponse: FileServerResponse;
};
export declare class UploaderFile {
  id: number;
  name: string;
  progress: number;
  error: string;
  size: number;
  type: string;
  file: File;
  lastServerResponse: FileServerResponse;
  constructor(id: number, file: File, progress?: number, lastServerResponse?: FileServerResponse, error?: string);
  get state(): "error" | "loading" | "normal";
}
