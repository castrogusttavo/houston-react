import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Treadmill01Icon({
  iconName = 'treadmill-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
