export interface Course {
  title: string
  description: string
  learningOutcome: string
  keySkills: string[]
  modules: Module[]
  features: Feature[]
  schedule: string
  mode: string
  enrolled: number
  trainers?: Trainer[]
  reviews?: Review[]
}

export interface Module {
  title: string
  description: string
  topics?: string[]
}

export interface Feature {
  title: string
  description: string
}

export interface Trainer {
  name: string
  designation: string
  experience: string
}

export interface Review {
  name: string
  rating: number
  comment: string
}
