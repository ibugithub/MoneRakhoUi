export type SignUpMethod = 'email' | 'google' | 'facebook' | 'microsoft';

export interface UserInterface {
  id?: number;
  email: string;
  name?: string;
  signUp_by?: SignUpMethod;
  is_admin?: boolean;
}

export interface ProfileInterface {
  user: UserInterface;
  Display_name: string | null;
  profile_picture: string | null;
  created_at: string;
  updated_at: string;
}
