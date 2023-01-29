import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import EditProfileModal from '../components/Profile/EditProfileModal'
import ProfileCard from '../components/Profile/ProfileCard'
import ProfilePost from '../components/Profile/ProfilePost'
import { frontEndBaseUrl } from '../utils/baseUrl'
import { GetProfileUser } from '../components/Types';


type Props = {
  userData: GetProfileUser
}

type editType = {
  status: boolean,
  id: number
}

const Profile = ({userData}: Props) => {
  const router = useRouter();
  const [toogleEditForm, setToogleEditForm] = useState<editType>({
    status: false,
    id: 0
  });  

  return (
    <div className='bg-gradient-to-b from-BackgroundColor to-gray-700 min-h-screen w-full px-2'>
        <Navbar />
        <div className='container mx-auto md:px-44 px-2 mt-10'>
          {
            toogleEditForm.status === true &&
            <div>
              <EditProfileModal setToogleEditForm={setToogleEditForm}  userData={userData}/>
            </div>
          }
            <ProfileCard setToogleEditForm={setToogleEditForm} userData={userData} />
            <ProfilePost />
        </div>
    </div>
  )
}

export default Profile

export async function getServerSideProps(context: any) {
  const {id} = context.params;
  const profileCardData = await axios.get(`${frontEndBaseUrl}/api/profile/profilecard/${id}`)
  
  return {
    props: {
      userData: profileCardData.data
    }, // will be passed to the page component as props
  }
}