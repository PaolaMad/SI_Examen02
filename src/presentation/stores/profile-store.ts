import { create } from "zustand";

export interface ProfileData {
    name: string;
    email: string;
    phone: string;
    direction: string;
    mount: number;
    interest: number;
    rate: number;
    refundDate: string;
    changeProfile: (name: string, email: string, phone: string, direction: string, mount: number, interest: number, rate: number, refundDate: string) => void;
}


export const useProfileStore = create<ProfileData>((set) => ({
    name: '',
    email: '',
    phone: '',
    direction: '',
    mount: 9,
    interest: 4,
    rate: 4,
    refundDate: '',

    changeProfile: (name: string, email: string, phone: string, direction: string, mount: number, interest: number, rate: number, refundDate: string) => {
        set({ name: name, email: email, phone: phone, direction: direction, mount: mount, interest: interest, rate: rate, refundDate: refundDate });
    },
}));    