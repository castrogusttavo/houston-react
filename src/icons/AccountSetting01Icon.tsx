import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AccountSetting01Icon({
  iconName = 'account-setting-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
