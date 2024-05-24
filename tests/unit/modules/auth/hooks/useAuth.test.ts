import { renderHook } from '@testing-library/react';

/* Modules */
import { useAuth } from '../../../../../src/modules/auth';

describe('Test in useAuth hook', () => {
    it('should return the respective props', () => {
        const { result } = renderHook(() => useAuth());

        expect(result.current).toEqual({
            updatePassword: expect.any(Function)
        });
    });
});