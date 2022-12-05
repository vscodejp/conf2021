// eslint-disable-next-line @typescript-eslint/ban-types
declare type FC<T = {}> = React.FC<T>

// eslint-disable-next-line @typescript-eslint/ban-types
declare type FCWithChildren<T = {}> = React.FC<React.PropsWithChildren<T>>

import * as i18next from 'i18next'

// https://github.com/isaachinman/next-i18next/issues/1781
declare module 'i18next' {
  interface TFunction {
    <
      TKeys extends i18next.TFunctionKeys = string,
      TInterpolationMap extends object = i18next.StringMap,
    >(
      key: TKeys,
      options?: i18next.TOptions<TInterpolationMap> | string,
    ): string
  }
}
