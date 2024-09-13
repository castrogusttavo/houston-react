import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bathtub01Icon({
  iconName = 'bathtub-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
