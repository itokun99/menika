import { Pressable, StyleSheet, View } from 'react-native';
import { AuthLayout } from '../components';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { createLoginSchema } from '../schemas';
import { Button, TextInput } from '@features/_global';
import { appStyles, spacing } from '@core/styles';
import { Text } from 'react-native-paper';
import { StackActions, useNavigation } from '@react-navigation/native';
import { RouteNames } from '@core/models';

export const LoginScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  const loginSchema = useMemo(() => createLoginSchema(t), [t]);

  const {
    control,
    handleSubmit,
    formState: { isDirty, isReady, isLoading, disabled, isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
  });

  const isDisabledButton =
    !isDirty ||
    !isReady ||
    isLoading ||
    disabled ||
    isSubmitting ||
    Object.keys(errors).length > 0 ||
    Object.values(control._formValues).some(value => !value);

  const handlePressRegister = () => {
    navigation.dispatch(StackActions.replace(RouteNames.register as never));
  };

  const onSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <AuthLayout
      title={t('authentication.login.title')}
      description={t('authentication.login.description')}
    >
      <View>
        <View style={styles.formWrapper}>
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

          <View style={styles.forgotPassword}>
            <Pressable>
              <Text variant="bodyMedium">
                {t('authentication.login.forgotPassword')}
              </Text>
            </Pressable>
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              disabled={isDisabledButton}
              onPress={handleSubmit(onSubmit)}
              mode="contained"
            >
              {t('authentication.login.loginButton')}
            </Button>
            <Button onPress={handlePressRegister}>
              {t('authentication.login.registerPrompt')}
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
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
