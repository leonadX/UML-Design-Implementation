class Student {
    constructor(){
        if(this.constructor == Student){
            throw new Error('Cannot instantiate this class')
        }
    }

    SignUp(){
        console.log("Thanks for signing up")
    }
  
    SignIn(){
        console.log("Welcome student")
    }
}

class Course extends Student{
    constructor(){
        super()
    }

    ViewCourseDetail(){
      console.log("JavaScript and Solidity")
    }

    ViewMaterialSupport(){
      console.log("Introduction to OOP")
    }
}

const Web3 = new Course()
Web3.ViewCourseDetail()
Web3.SignUp()
Web3.SignIn()

class Tutor{
   constructor(){
    if(this.constructor == Tutor){
        throw new Error("Can't be instantiated")
    }
   }
}

class Video extends Tutor{
    constructor(){
        super()
    }

    #Upload(){
       console.log("Upload successful")
    }

    UploadVideo(){
        this.#Upload()
    }
}

class Admin extends Tutor{
    constructor(){
        super()
    }

    SignOut(){
      console.log("Signed out")
    }

    RecordProgress(){
      console.log("Progress saved")
    }
}

const John = new Admin()
const Inheritance = new Video()
Inheritance.UploadVideo()
John.RecordProgress()
John.SignOut()