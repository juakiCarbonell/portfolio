export const images: string[] = [
    'https://res.cloudinary.com/dhbrsb9qd/image/upload/v1677843790/slide3_6d9aa807ac.jpg',
    'https://res.cloudinary.com/dhbrsb9qd/image/upload/v1677843789/slide1_daeeb3c071.jpg',
    'https://res.cloudinary.com/dhbrsb9qd/image/upload/v1677843789/slide2_8c43c32e59.jpg'
  ]
  
  const imageByIndex = (index: number): string => images[index % images.length]
  
  export default imageByIndex
  