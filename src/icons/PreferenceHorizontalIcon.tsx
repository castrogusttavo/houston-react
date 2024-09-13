import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PreferenceHorizontalIcon({
  iconName = 'preference-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
