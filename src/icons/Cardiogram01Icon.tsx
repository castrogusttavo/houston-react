import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Cardiogram01Icon({
  iconName = 'cardiogram-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
