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
export const postUpdateStudent=baseUrl+"Student/UpdateStudent";
export const deleteStudentById=baseUrl+"Student/DeleteStudent/";

export const getAllStudentDriveStatus=baseUrl+"StudentDriveStatus/GetAllStudentDriveStatus";
export const getAllStudentDrives=baseUrl+"StudentDrive/GetStudentDrives";
export const postApplyToDrive=baseUrl+"StudentDrive/ApplyToDrive";
export const updateStudentDrive=baseUrl+"StudentDrive/UpdateStudentDrive";
export const deleteStudentDrive=baseUrl+"StudentDrive/DeleteStudentDrive/";

export const getTotalDriveCount=baseUrl+"Dashboard/GetTotalDriveCount";
export const getTotalPlacementCount=baseUrl+"Dashboard/GetTotalPlacementCount";
export const getTotalStudentApplied=baseUrl+"Dashboard/GetTotalStudentApplied";
export const getTotalStudentCount=baseUrl+"Dashboard/GetTotalStudentCount";
export const getTotalStudentShortlisted=baseUrl+"Dashboard/GetTotalStudentShortlisted";
export const getTotalRejectedStudents=baseUrl+"Dashboard/GetTotalRejectedStudents";




export const workType=["WFO","WFH"];
export enum Roles{Student=1,PlacementExecutive,PlacementManager,CEO,Admin};