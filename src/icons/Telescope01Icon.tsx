import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Telescope01Icon({
  iconName = 'telescope-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
