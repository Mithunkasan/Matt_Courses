export interface instructors { 
  id: string;
  name: string;
  profession: string;
  image: string;
  border: string;
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  image: string;
  courses: number;
  students: number;
  rating: number;
}

export interface LectureContent {
  title: string;
  duration: string;
  preview: boolean;
}

export interface Section {
  title: string;
  lectures: number;
  duration: string;
  content: LectureContent[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  rating: number;
  reviews: number;
  students: number;
  lastUpdated: string;
  language: string;
  level: string;
  duration: string;
  instructor: Instructor;
  price: number;
  discountPrice: number;
  includes: string[];
  sections: Section[];
  whatYouWillLearn: string[];
  requirements: string[];
  description: string;
}

export interface CourseData {
  courses: Course[];
}
