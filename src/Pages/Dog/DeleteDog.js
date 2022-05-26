import React from 'react'
import { useDispatch } from "react-redux";
import { deletedog } from '../../redux/DogSlice';
import { useTranslation } from 'react-i18next';
export default function DeleteDog({id}) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletedog({id}));
    };
    const { t } = useTranslation();

    return (
        <div>
            <button type="button" className="btn btn-outline-danger ms-1" onClick={() => handleDelete(id)} >
            {t('delete')}
            </button>
        </div>
    )
}
