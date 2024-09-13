import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Typescript01Icon({
  iconName = 'typescript-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
