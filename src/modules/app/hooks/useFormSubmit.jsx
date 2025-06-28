import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const useFormSubmit = ({
    action = null, // optional: dispatchable redux action
    navigateTo = null, // optional: where to redirect
    prepareData = null, // optional: modify data before submit
    onSuccess = null, // optional: callback after success
    onError = null // optional: callback on error
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useCallback(async (data) => {
        if (!data) return;

        try {
            const payload = prepareData ? prepareData(data) : data;

            if (action) {
                await dispatch(action(payload));
            }

            if (onSuccess) {
                onSuccess(payload);
            }

            if (navigateTo) {
                navigate(navigateTo);
            }
        } catch (err) {
            if (onError) {
                onError(err);
            } else {
                console.error('Form submit error:', err);
            }
        }
    }, [action, navigateTo, prepareData, onSuccess, onError, dispatch, navigate]);
};

export default useFormSubmit;
