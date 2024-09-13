import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleLock01Icon({
  iconName = 'circle-lock-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
