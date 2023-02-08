import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    last_name: "",
    photo: "",
    about_me: "",
    email: "",
    mobile_number: "",
    position: "",
    the_employer: "",
    start_date: "",
    end_date: "",
    description: "",
    school: "",
    degree: "",
    graduation_year: "",
    school_description: "",
};

export const informationSlice = createSlice({
    name: "information",
    initialState,
    reducers: {
        addBasicInfo: (state, action) => {
            const { name, last_name, photo, about_me, email, mobile_number } =
                action.payload;
            state.name = name;
            state.last_name = last_name;
            state.email = email;
            state.about_me = about_me;
            state.photo = photo;
            state.mobile_number = mobile_number;
        },
        addJobInformation: (state, action) => {
            const {
                position,
                the_employer,
                start_date,
                end_date,
                description,
            } = action.payload;
            state.position = position;
            state.the_employer = the_employer;
            state.start_date = start_date;
            state.end_date = end_date;
            state.description = description;
        },
        addSchoolInformation: (state, action) => {
            const { school, degree, graduation_year, school_description } =
                action.payload;
            state.school = school;
            state.degree = degree;
            state.graduation_year = graduation_year;
            state.school_description = school_description;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addBasicInfo, addJobInformation, addSchoolInformation } = informationSlice.actions;

export default informationSlice.reducer;
