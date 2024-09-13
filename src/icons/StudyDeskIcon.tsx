import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StudyDeskIcon({
  iconName = 'study-desk',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
