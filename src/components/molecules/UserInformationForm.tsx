import React, { useState } from 'react';
import InputGroup from '@/components/atoms/InputGroup';
import { UserInformations } from "@generated/models/UserInformations";
import { UserInformationsUpdateInput } from "@generated/models/UserInformationsUpdateInput";

interface UserInformationFormProps {
  userInformation: UserInformations;
  onSubmit: (updatedUser: UserInformationsUpdateInput) => Promise<void>;
}

const UserInformationForm: React.FC<UserInformationFormProps> = ({ userInformation, onSubmit }) => {
  const [firstname, setFirstname] = useState(userInformation?.firstname || '');
  const [lastname, setLastName] = useState(userInformation?.lastname || '');
  const [email, setEmail] = useState(userInformation?.email || '');
  const [phone, setPhone] = useState(userInformation?.phoneNumber || '');
  const [tva, setTva] = useState(userInformation?.tva || 0);
  const [siret, setSiret] = useState(userInformation?.siret || '');
  const [streetAddress, setStreetAddress] = useState(userInformation?.address || '');
  const [city, setCity] = useState(userInformation?.city || '');
  const [zipcode, setZipCode] = useState(userInformation?.zip || '');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const updatedUser: UserInformationsUpdateInput = {
      firstname: firstname.toString(),
      lastname: lastname.toString(),
      city: city.toString(),
      tva,
      zip: zipcode.toString(),
      address: streetAddress.toString(),
      siret: siret.toString(),
      phoneNumber: phone.toString(),
      email: email.toString(),
    };

    await onSubmit(updatedUser);
  };

  return (
    <form className='mt-3' onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <InputGroup label="First Name" name="firstname" type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <InputGroup label="Last Name" name="lastname" type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputGroup label="Email" name="email" type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputGroup label="Phone" name="phone" type="tel" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputGroup label="TVA" name="tva" type="number" placeholder="Enter TVA" value={tva} onChange={(e) => setTva(parseInt(e.target.value))} />
        <InputGroup label="SIRET" name="siret" type="text" placeholder="Enter SIRET" value={siret} onChange={(e) => setSiret(e.target.value)} />
      </div>
        <InputGroup label="Street Address" name="address" type="text" placeholder="Enter Street Address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
        
        <div className="grid grid-cols-3 gap-4">
          <InputGroup label="City" name="city" type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
          <InputGroup label="Zipcode" name="zipcode" type="text" placeholder="Enter Zipcode" value={zipcode} onChange={(e) => setZipCode(e.target.value)} />
        </div>
      <div className="flex items-center justify-end">
        <button
          className="bg-[#5051F9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Save
        </button>
      </div>
    </form >
  );
};

export default UserInformationForm;