import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Heading01Icon({
  iconName = 'heading-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
