import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Activity01Icon({
  iconName = 'activity-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
