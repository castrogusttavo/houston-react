import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PreferenceVerticalIcon({
  iconName = 'preference-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
