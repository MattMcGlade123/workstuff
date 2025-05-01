'use client';

import React, { FC, FormEvent, useCallback, useState } from 'react';

import ProductFormStructure from './ProductFormStructure';
import { ProductTypeBasic } from '@/custom-type';


const ProductFormLogic: FC = () => {
  const [formValues, setFormValues] = useState<ProductTypeBasic>({
    slug: '',
    name: '',
    price: 0,
    image: {
      url: '',
      alt: ''
    }
  });

  const handleType = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case 'slug':
        setFormValues({
          ...formValues,
          slug: value
        })

        break;

      case 'name':
        setFormValues({
          ...formValues,
          name: value
        })

        break;

      case 'price':
        setFormValues({
          ...formValues,
          price: Number(value)
        })

        break;

      case 'image-url':
        setFormValues({
          ...formValues,
          image: {
            ...formValues.image,
            url: value
          }
        })

        break;

      case 'image-alt':
        setFormValues({
          ...formValues,
          image: {
            ...formValues.image,
            alt: value
          }
        })

        break;

      default:
        setFormValues({
          ...formValues
        })

        break;
    }
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
  }

  const componentProps = {
    handleSubmit,
    handleType
  }

  return <ProductFormStructure {...componentProps
  } />;
};

export default ProductFormLogic;
