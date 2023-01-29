export type ToogleCommentModalPro = {
    status: string,
    id?: number
  }


export type GetProfileUser = {
  bio: string
  category: string
  createdAt: string
  email:string
  fullname: string
  image: {url: string,public_id?: string}
  mobile: string
  updatedAt: string
  id: string
}