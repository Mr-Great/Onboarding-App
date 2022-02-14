export type GeoType = {
  lat: number;
  lng: number;
};
export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: GeoType;
};

export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export default interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: number;
  website: string;
  company: CompanyType;
}
