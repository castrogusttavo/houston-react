import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowRight01Icon({
  iconName = 'arrow-right-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
