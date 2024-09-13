import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TouchLocked01Icon({
  iconName = 'touch-locked-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
