import { renderHook } from '@testing-library/react';

import { useAuth } from '../../../src/auth/hooks';

describe('Test in useAuth hook', () => {
    it('should return the respective props', () => {
        const { result } = renderHook(() => useAuth());

        expect(result.current).toEqual({
            updatePassword: expect.any(Function)
        });
    });
});