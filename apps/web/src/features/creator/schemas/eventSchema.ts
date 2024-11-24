import * as Yup from 'yup';

export const createEventValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    image: Yup.string().required('Image is required'),
    startDate: Yup.string().required('Start Date is required'),
    endDate: Yup.string().required('End Date is required'),
    startTime: Yup.string().required('Start Time is required'),
    endTime: Yup.string().required('End Time is required'),
    location: Yup.string().required('Location is required'),
    address: Yup.string(),
    url: Yup.string(),
    description: Yup.string().required('Description is required'),
    termsAndContition: Yup.string().required('Terms and Condition is required'),
    ticketName: Yup.string().required('Name is required'),
    qty: Yup.number().required('Quantity is required'),
    price: Yup.number(),
    ticketDescription: Yup.string().required('Description is required'),
    ticketStartDate: Yup.string().required('Start Date is required'),
    ticketEndDate: Yup.string().required('End Date is required'),
    ticketStartTime: Yup.string().required('Start Time is required'),
    ticketEndTime: Yup.string().required('End Time is required')
})