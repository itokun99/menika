import { TFunction } from 'i18next';
import z from 'zod';

/**
 * @description
 * Schema for validating registration form inputs.
 * @param t - Translation function from i18next.
 * @returns A Zod schema for validating registration inputs.
 */
export const createRegisterSchema = (t: TFunction) =>
  z
    .object({
      fullname: z
        .string({
          error: t('validation.required'),
        })
        .min(2, {
          error: t('validation.minLength', {
            count: 2,
          }),
        }),
      email: z.email({
        error: t('validation.email'),
      }),

      password: z
        .string({
          error: t('validation.required'),
        })
        .min(6, {
          error: t('validation.passwordLength', { count: 6 }),
        }),
      confirmPassword: z.string({
        error: t('validation.required'),
      }),
      termCondition: z.boolean(),
    })
    .refine(data => data.password === data.confirmPassword, {
      error: t('validation.passwordsMatch'),
      path: ['confirmPassword'],
    });
