import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DatabaseSettingIcon({
  iconName = 'database-setting',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
