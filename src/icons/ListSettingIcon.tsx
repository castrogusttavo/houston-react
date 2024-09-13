import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ListSettingIcon({
  iconName = 'list-setting',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
