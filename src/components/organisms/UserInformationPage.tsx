import React, { useState, useEffect } from 'react';
import { Setting, UpdateUserInformation } from '@/lib/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserInformations } from "@generated/models/UserInformations";
import { UserInformationsUpdateInput } from "@generated/models/UserInformationsUpdateInput";
import UserInformationForm from '@/components/molecules/UserInformationForm';
import Image from "@/components/atoms/Image"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserInformation() {

  const [userInformation, setUserInformation] = useState<UserInformations>({
    address: '',
    city: '',
    email: '',
    firstname: '',
    id: '',
    lastname: '',
    phoneNumber: '',
    siret: '',
    state: '',
    tva: 0,
    zip: '',
    userId: ''
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await Setting();
      if (response?.data) {
        setUserInformation(response.data);
      }
    };
    fetchUserInfo();
  }, []);

  const handleUpdateUserInformation = async (updatedUser: UserInformationsUpdateInput) => {
    const response = await UpdateUserInformation(updatedUser);
    if (response?.statusCode === 200) {
      toast.success('User information updated successfully!');
    } else if (response?.statusCode === 404) {
      toast.error('Error updating user information!');
    } else {
      console.error('Unexpected error:', response);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <Image src="/setting.svg" alt="setting" width={1000} height={200} className='rounded' />
            <div className="absolute bottom-8 left-4">
              <Image src="/avatarTest.svg" alt="circle" className="rounded-full" width={107} height={100} />
            </div>
          </div>
          <div className="w-full max-w-[62.5rem]">
            <UserInformationForm userInformation={userInformation} onSubmit={handleUpdateUserInformation} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>

  );
}