import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StudyLampIcon({
  iconName = 'study-lamp',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
