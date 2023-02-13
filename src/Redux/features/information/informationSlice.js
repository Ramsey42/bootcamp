import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: localStorage.getItem("inputFieldNameValue") || "",
    last_name: localStorage.getItem("inputFieldLastnameValue") || "",
    photo: localStorage.getItem("uploadedImage") || null,
    about_me: localStorage.getItem("inputFieldAboutValue") || "",
    email: localStorage.getItem("inputFieldEmailValue") || "",
    mobile_number: localStorage.getItem("inputFieldMobileValue") || "",
    position: localStorage.getItem("inputFieldPositionValue") || "",
    the_employer: localStorage.getItem("inputFieldEmployeeValue") || "",
    start_date: localStorage.getItem("inputFieldStartdateValue") || "",
    end_date: localStorage.getItem("inputFieldEnddateValue") || "",
    description: localStorage.getItem("inputFieldDiscriptionValue") || "",
    school: localStorage.getItem("inputFieldEducationValue") || "",
    degree: localStorage.getItem("inputFieldDegreeValue") || "",
    graduation_year: localStorage.getItem("inputFieldEdudiscription") || "",
    school_description: localStorage.getItem("inputFieldGraduateValue") || "",
    image: "",
    apiData: "",
};

export const informationSlice = createSlice({
    name: "information",
    initialState,
    reducers: {
        addImage: (state, action) => {
            const { image } = action.payload;
            state.image = image;
        },
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
        setApiData: (state, action) => {
            state.apiData = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addBasicInfo,
    addJobInformation,
    addSchoolInformation,
    addImage,
    setApiData,
} = informationSlice.actions;

export default informationSlice.reducer;
