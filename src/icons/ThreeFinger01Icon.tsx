import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreeFinger01Icon({
  iconName = 'three-finger-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
