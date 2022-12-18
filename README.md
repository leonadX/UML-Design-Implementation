# UML-Design-Implementation
I created an abstract class "Student" with the methods: SignIn(), SignOut()
Then I added a class "Course" that inherits from the Student class with methods: ViewCourseDetail(), ViewMaterialSupport()

I also created an abstract class "Tutor"
Then I created two classes than inherit from the Tutor class namely: Video, Admin
The Video class has a private method: #Upload() that uploads the video, and a public method UploadVideo() that calls the private method #Upload()
The Admin class has two methods: SignOut() and RecordProgress()
