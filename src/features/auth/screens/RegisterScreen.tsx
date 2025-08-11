import { StyleSheet, View } from 'react-native';
import { AuthLayout } from '../components';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { createRegisterSchema } from '../schemas';
import { Button, CheckboxInput, TextInput } from '@features/_global';
import { spacing } from '@core/styles';
import { StackActions, useNavigation } from '@react-navigation/native';
import { RouteNames } from '@core/models';

export const RegisterScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  const registerSchema = useMemo(() => createRegisterSchema(t), [t]);

  const {
    control,
    handleSubmit,
    formState: { isDirty, isReady, isLoading, disabled, isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      termCondition: false,
    },
    mode: 'onBlur',
  });

  const isDisabledButton =
    !isDirty ||
    !isReady ||
    isLoading ||
    disabled ||
    isSubmitting ||
    Object.keys(errors).length > 0;

  const handlePressLogin = () => {
    navigation.dispatch(StackActions.replace(RouteNames.login as never));
  };

  const onSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <AuthLayout
      title={t('authentication.register.title')}
      description={t('authentication.register.description')}
    >
      <View>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            name="fullname"
            render={p => {
              return (
                <>
                  <TextInput
                    onChangeText={p.field.onChange}
                    onBlur={p.field.onBlur}
                    ref={p.field.ref}
                    value={p.field.value}
                    mode="outlined"
                    label={t('common.fullname')}
                    placeholder={t('common.namePlaceholder')}
                    errorText={p.fieldState.error?.message}
                  />
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="email"
            render={p => {
              return (
                <TextInput
                  onChangeText={p.field.onChange}
                  onBlur={p.field.onBlur}
                  ref={p.field.ref}
                  value={p.field.value}
                  mode="outlined"
                  label={t('common.email')}
                  placeholder={t('common.emailPlaceholder')}
                  errorText={p.fieldState.error?.message}
                  keyboardType="email-address"
                />
              );
            }}
          />
          <Controller
            control={control}
            name="password"
            render={p => {
              return (
                <TextInput
                  onChangeText={p.field.onChange}
                  onBlur={p.field.onBlur}
                  ref={p.field.ref}
                  value={p.field.value}
                  mode="outlined"
                  label={t('common.password')}
                  placeholder={t('common.passwordPlaceholder')}
                  errorText={p.fieldState.error?.message}
                  secureTextEntry
                />
              );
            }}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={p => {
              return (
                <TextInput
                  onChangeText={p.field.onChange}
                  onBlur={p.field.onBlur}
                  ref={p.field.ref}
                  value={p.field.value}
                  mode="outlined"
                  label={t('common.confirmPassword')}
                  placeholder={t('common.confirmPasswordPlaceholder')}
                  errorText={p.fieldState.error?.message}
                  secureTextEntry
                />
              );
            }}
          />
          <Controller
            control={control}
            name="termCondition"
            render={p => {
              return (
                <CheckboxInput
                  text={t('authentication.register.termsAndConditions')}
                  onChange={val => p.field.onChange(val)}
                  value={p.field.value}
                />
              );
            }}
          />

          <View style={styles.buttonWrapper}>
            <Button
              disabled={isDisabledButton}
              onPress={handleSubmit(onSubmit)}
              mode="contained"
            >
              {t('authentication.register.registerButton')}
            </Button>
            <Button onPress={handlePressLogin}>
              {t('authentication.register.alreadyRegistered')}
            </Button>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    gap: spacing.xxs,
  },
  buttonWrapper: {
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
});
