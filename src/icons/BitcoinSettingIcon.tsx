import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinSettingIcon({
  iconName = 'bitcoin-setting',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
