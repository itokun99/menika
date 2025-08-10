import { TFunction } from 'i18next';
import z from 'zod';

/**
 * @description
 * Schema for validating login form inputs.
 * @param t - Translation function from i18next.
 * @returns A Zod schema for validating login inputs.
 */
export const createLoginSchema = (t: TFunction) =>
  z.object({
    email: z.email({
      error: t('validation.email'),
    }),
    password: z.string({
      error: t('validation.required'),
    }),
  });
