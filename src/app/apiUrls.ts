"user strict"
export const baseUrl:string="http://localhost:46161/api/";

export const register=baseUrl+"Users/Register";
export const userLogin=baseUrl+"Users/Login";
export const getUsersbyRolePE=baseUrl+"Users/GetUserByRolePE";


export const postAddDrive=baseUrl+"Drive/AddDrive";
export const getAllDrives=baseUrl+"Drive/GetAllDrives";
export const postUpdateDrive=baseUrl+"Drive/UpdateDrive";
export const deleteDrive=baseUrl+"Drive/DeleteDrive/";

export const getAllDriveStatus=baseUrl+"DriveStatus/GetAllDriveStatus";

export const getAllStudents=baseUrl+"Student/GetAllStudents";
export const getStudentById=baseUrl+"Student/GetStudentById/";
export const postAddStudent=baseUrl+"Student/AddStudent";
export const postUpdateStudent=baseUrl+"Student/UpateStudent";
export const deleteStudentById=baseUrl+"Student/DeleteStudent/";





export const workType=["WFO","WFH"];
