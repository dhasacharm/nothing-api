const mongoose = require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid'); // Import UUID package

// Patient Schema
const patientSchema = new Schema(
    {
        _id: { type: String, default: uuidv4 }, // Generate UUID as default _id
        Types: { type: String },
        TitleId: { type: String },
        FirstName: { type: String, required: true },
        MiddleName: { type: String },
        LastName: { type: String, required: true },
        AliasName: { type: String },
        Age: { type: Number },
        DOB: { type: Date },
        Gender: { type: String, required: true },
        Mobile: { type: String },
        AlternateMobileNum: { type: String },
        Email: { type: String },
        MaritalStatus: { type: String },
        SpouseType: { type: String },
        SpouseName: { type: String },
        Ethnicity: { type: String },
        Nationality: { type: String },
        NationalityIdentifier: { type: String },
        PassportNumber: { type: String },
        VisaType: { type: String },
        VisaNumber: { type: String },
        VisaExpiry: { type: Date },
        Occupation: { type: String },
        OccupationType: { type: String },
        OccupationCode: { type: String },
        OccupationShortCode: { type: String },
        Religion: { type: String },
        BloodGroup: { type: String },
        AlternateEmail: { type: String },
        AbhaNo: { type: String },
        AadharNumber: { type: String },
        Attender_Information: { type: String },
        AddressLine1: { type: String },
        AddressLine2: { type: String },
        Pincode: { type: String },
        Area: { type: String },
        City: { type: String },
        State: { type: String },
        Country: { type: String },
        LandLine: { type: String },
        Income: { type: Number },
        CovidVaccine: { type: String },
        PatientType: { type: String },
        IsVip: { type: Boolean },
        VipType: { type: String },
        IsInsurance: { type: Boolean },
        IVFRegister: { type: Boolean },

        // Visit Details
        Visit_Type: { type: String },
        Doctor: { type: String },
        Department: { type: String },
        Insurance_Type: { type: String },
        Insurance: { type: String },
        Source_Type: { type: String },
        ReferralType: { type: String },
        ReferralName: { type: String },
        Reason: { type: String },
        Insurance_Number: { type: String },
        IsMlc: { type: Boolean },
        Token_Num: { type: String },
        ReasonType: { type: String },
        ReasonRemarks: { type: String },
        ReasonActive: { type: Boolean },

        // Discount and Payment
        Discount_Type: { type: String },
        Discount: { type: Number },
        Payment_Type: { type: String },
        Receipt_Amount: { type: Number },

        // Additional Information
        Emergency: { type: Boolean },
        No_Bill: { type: Boolean },
        Is_OPD: { type: Boolean },

        // Membership Details
        Membership_Number: { type: String },
        MembershipType: { type: String },
        HolderName: { type: String },
        MembershipValidTo: { type: Date },

        // Other Fields
        UserPic: { type: String },
        Remarks: { type: String },
        Registered_Date: { type: Date },
        Registered_By: { type: String },
        Facility: { type: String },
        MarketingPerson: { type: String },
        Speciality: { type: String },

        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

// Indexes
patientSchema.index({ MRN: 1 });
patientSchema.index({ FamilyUniqueId: 1 });

// Create Model
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
