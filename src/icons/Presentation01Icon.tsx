import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Presentation01Icon({
  iconName = 'presentation-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
