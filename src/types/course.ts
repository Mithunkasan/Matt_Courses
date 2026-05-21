export interface Course {
  id: string
  slug: string
  title: string
  description: string
  duration: string
  sessionDuration: string
  schedule: string
  mode: string
  enrolled: number
  admissionFee: string
  learningOutcome: string
  keySkills: string[]
  modules: Module[]
  features: Feature[]
  trainers: Trainer[]
  reviews: Review[]
  programStructure?: string[]
  careerSupport?: string[]
}

export interface Module {
  title: string
  description: string
  duration: string
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

import type React from "react"
export interface CourseItem {
  title: string
  link: string
  isPopular?: boolean
}

export interface Category {
  title: string
  icon: React.ReactNode
  color: string
  items: CourseItem[]
}

export interface Courses {
  id: string
  title: string
  category: string
  subcategory: string
  institution: string
  image: string
  isPopular: boolean
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  rating: number
  students: number
  price: number
  link: string
}

